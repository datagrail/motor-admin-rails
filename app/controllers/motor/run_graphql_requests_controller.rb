# frozen_string_literal: true

module Motor
  class RunGraphqlRequestsController < APIBaseController
    JWT_TTL = 2.hours

    wrap_parameters :data

    def create
      respond_with_result
    end

    private

    def respond_with_result
      response = Motor::APIConfigs.run_grapql(find_or_initialize_api_config,
                                              query: request_params[:query],
                                              variables: request_params[:variables],
                                              headers: { 'Authorization' => "Bearer #{current_user_jwt}" })

      self.response_body = response.body
      self.status = response.code.to_i
    end

    def find_or_initialize_api_config
      Motor::APIConfig.find_by(name: request_params[:api_config_name]) ||
        Motor::APIConfig.new(url: request_params[:api_config_name])
    end

    def current_user_jwt
      return '' unless defined?(JWT)
      return '' unless current_user

      payload = { uid: current_user.id, email: current_user.email, exp: JWT_TTL.from_now.to_i }

      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

    def request_params
      params.require(:data).permit!
    end
  end
end
