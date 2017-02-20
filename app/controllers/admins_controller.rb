class AdminsController < ApplicationController
  before_action :authenticate_admin!, except: :new, :create

  def new
    @admin = Admin.new
  end

  def create
    @admin = Admin.new(admin_params)
    @admin.save
  end

  def edit
    @admin = Admin.find(params[:id])
  end

  def update
    @admin = Admin.find(params[:id])
    @admin.update(admin_params)
  end

  def destroy
  end

  private

  def admin_params
    params.require(:admin).permit(:name, :email, :password)
  end
end
