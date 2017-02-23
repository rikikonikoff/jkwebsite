class Api::V1::WheresJacobsController < ApplicationController
  def index
    @where = WheresJacob.last
    render json: @where
  end
end
