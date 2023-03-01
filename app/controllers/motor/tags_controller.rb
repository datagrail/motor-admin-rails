# frozen_string_literal: true

module Motor
  class TagsController < APIBaseController
    load_and_authorize_resource :tag

    def index
      render json: { data: @tags.to_a }
    end
  end
end
