# frozen_string_literal: true

module Motor
  module APIQuery
    module_function

    def call(rel, params)
      rel = APIQuery::Sort.call(rel, params[:sort] || params[:order])
      rel = APIQuery::Paginate.call(rel, params[:page])
      rel = APIQuery::Filter.call(rel, params[:filter] || params[:filters])
      rel = APIQuery::ApplyScope.call(rel, params[:scope])

      APIQuery::Search.call(rel, params[:q] || params[:search] || params[:query])
    end
  end
end

require_relative './api_query/sort'
require_relative './api_query/paginate'
require_relative './api_query/filter'
require_relative './api_query/search'
require_relative './api_query/apply_scope'
require_relative './api_query/build_meta'
require_relative './api_query/build_json'
