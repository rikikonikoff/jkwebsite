class RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: :create

  def new
    @user = User.new
  end

  def create
    @user = User.new(sign_up_params)
    @user.save
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
  end

  private

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password, :password_confirmation])
  end

  def after_update_path_for(resource)
    user_path(resource)
  end
end
