# frozen_string_literal: true

module Motor
  class NotificationsController < APIBaseController
    wrap_parameters :data, except: %i[include fields]

    load_and_authorize_resource :notification

    def index
      @notifications =
        Motor::APIQuery.call(@notifications.where(recipient: current_user).order(created_at: :desc), params)

      render json: {
        data: Motor::APIQuery::BuildJson.call(@notifications, params, current_ability),
        meta: Motor::APIQuery::BuildMeta.call(@notifications, params)
      }
    end

    def update
      @notification.update!(notification_params)

      Motor::NotificationsChannel.broadcast_to(current_user, ['update', @notification.as_json(include: %i[record])])

      render json: { data: Motor::APIQuery::BuildJson.call(@notification, params, current_ability) }
    end

    private

    def notification_params
      params.require(:data).permit(:status)
    end
  end
end
