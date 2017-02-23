class Api::V1::PublicationsController < ApplicationController
  def index
    @publications = Publication.all
    render json: @publications
  end
end
