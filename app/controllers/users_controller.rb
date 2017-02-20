class UsersController < ApplicationController
  before_action :authenticate_admin!, only: [:index]

  def index
    if params[:approved] == "false"
      @users = User.where(approved: false)
    else
      @users = User.all
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.save
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
