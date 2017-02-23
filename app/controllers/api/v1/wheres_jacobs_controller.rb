class Api::V1::WheresJacobsController < ApplicationController
  def index
    @where = WheresJacob.last
    render json: @where
  end

  def create
    respond_with :api, :v1, WheresJacob.create(item_params)
  end

  private

  def where_params
    params.require(:wheres_jacob).permit(:location)
  end
end
