class AdminsController < Devise::RegistrationsController
  before_action :configure_params, only: :update
  before_action :authenticate_admin!, except: [:new, :create]
  respond_to :html, :json

  def edit
    @admin = current_admin
  end

  def update
    @admin = current_admin(account_update_params)
    if @admin.update_attributes?
      flash[:notice] = "Success!"
      redirect_to root_path
    else
      flash[:notice] = @admin.errors.full_messages.to_sentence
      render :edit
    end
  end
end
