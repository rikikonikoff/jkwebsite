class Api::V1::UsersController < ApplicationController
  before_action :authenticate_admin!

  def index
    @users = User.order("approved", "updated_at DESC")
    render json: @users
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(approve_params)
    render json: User.all
  end

  private

  def approve_params
    params.require(:user).permit(:approved)
  end
end
