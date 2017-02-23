class WheresJacobsController < ApplicationController
  before_action :authenticate_user! || :authenticate_admin!

  def index
  end

  def show
    @where = WheresJacob.last
  end

  def new
    authenticate_admin!
    @where = WheresJacob.new
  end

  def create
    @where = WheresJacob.new(where_params)
    if @where.save
      flash[:notice] = "Where's Jacob Set!"
      redirect_to wheres_jacobs_path
    else
      flash[:notice] = @where.errors.full_messages.to_sentence
      render :new
    end
  end

  private

  def where_params
    params.require(:wheres_jacob).permit(:location)
  end
end
