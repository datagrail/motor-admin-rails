# frozen_string_literal: true

module Motor
  class AuditsController < APIBaseController
    load_and_authorize_resource :audit

    def index
      audits = Motor::APIQuery.call(@audits, params)

      render json: {
        data: Motor::APIQuery::BuildJson.call(audits, params, current_ability),
        meta: Motor::APIQuery::BuildMeta.call(audits, params)
      }
    end
  end
end
