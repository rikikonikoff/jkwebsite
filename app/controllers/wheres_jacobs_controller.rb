class WheresJacobsController < ApplicationController
  before_action :authenticate_user! || :authenticate_admin!

  def index
  end

  def show
    @where = WheresJacob.last
  end

  def new
    before do
      authenticate_admin!
    end
    @where = WheresJacob.new
  end

  def create
    @where = WheresJacob.new(location: params[:wheres_jacob][:location])
    @where.save
  end
end
