class AdminsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: :create
  before_action :authenticate_admin!, except: [:new, :create]
  respond_to :html, :json

  def new
    @admin = Admin.new
  end

  def create
    @admin = Admin.new(sign_up_params)
    @admin.save
  end

  def edit
    @admin = current_admin
  end

  def update
    @admin = current_admin
  end

  private

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password, :password_confirmation])
  end

  def after_update_path_for(resource)
    root_path
  end
end
