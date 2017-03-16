class ApplicationController < ActionController::Base
  # need this line for wheresjacob to work
  protect_from_forgery with: :null_session
  before_action :configure_params, if: :devise_controller?

  protected

  def configure_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [
      :name, :email, :password, :password_confirmation
      ])
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
    devise_parameter_sanitizer.permit(:account_update, keys: [
      :name, :email, :current_password, :password, :password_confirmation
      ])
  end
end
