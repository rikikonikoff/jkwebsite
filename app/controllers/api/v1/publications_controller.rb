class Api::V1::PublicationsController < ApplicationController
  def index
    @publications = Publication.order("date DESC, title")
    render json: @publications
  end
end
