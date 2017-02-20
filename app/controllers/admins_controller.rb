class AdminsController < ApplicationController
  def new
    @admin = Admin.new
  end

  def create
    @admin = Admin.new(admin_params)
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def admin_params
    params.require(:admin).permit(:name, :email, :password)
  end
end
