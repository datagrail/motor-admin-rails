# frozen_string_literal: true

module Motor
  class ResourcesController < APIBaseController
    wrap_parameters :data, except: %i[include fields]

    load_and_authorize_resource

    def index
      render json: { data: Motor::APIQuery::BuildJson.call(@resources, params, current_ability) }
    end

    def create
      Motor::Resources::PersistConfigs.call(@resource)
      Motor::Configs::WriteToFile.call

      render json: { data: Motor::APIQuery::BuildJson.call(@resource, params, current_ability) }
    end

    private

    def resource_params
      params.require(:data).permit!
    end
  end
end
