class Api::V1::WheresJacobsController < ApplicationController
  skip_before_action :verify_authenticity_token,
    if: Proc.new { |c| c.request.format == 'application/json' }

  def index
    @where = WheresJacob.all.sort_by(&:updated_at).reverse!.take(1)
    render json: @where
  end

  def create
    if @existing = WheresJacob.find_by(location: where_params[:location])
      @existing.update_attributes!
      flash[:notice] = "you updated your location"
      redirect_to "/wheresjacob"
    else
      @where = WheresJacob.new(where_params)
      if @where.save
        flash[:notice] = "you updated your location"
        redirect_to "/wheresjacob"
      else
        flash[:notice] = @where.errors.full_messages.to_sentence
        render "wheres_jacobs/index"
      end
    end
  end

  private

  def where_params
    params.require(:wheres_jacob).permit(:location)
  end
end
