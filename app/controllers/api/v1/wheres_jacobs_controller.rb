class Api::V1::WheresJacobsController < ApplicationController
  skip_before_filter :verify_authenticity_token,
    if: Proc.new { |c| c.request.format == 'application/json' }

  def index
    @where = WheresJacob.last
    render json: @where
  end

  def create
    @where = WheresJacob.new(where_params)
    if @where.save
      flash[:notice] = "you updated your location"
      redirect_to "/wheresjacob"
    else
      flash[:notice] = @where.errors.full_messages.to_sentence
      render :index
    end
  end

  private

  def where_params
    params.require(:wheres_jacob).permit(:location)
  end
end
