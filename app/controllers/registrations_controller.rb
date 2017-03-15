class RegistrationsController < Devise::RegistrationsController
  before_action :configure_params, only: [:create, :update]
  before_action :authenticate_user!, except: [:new, :create]
  respond_to :html, :json

  def new
    @user = User.new
  end

  def create
    @user = User.new(sign_up_params)
    if @user.save
      flash[:notice] = "You created an account!
      You just need to wait for Jacob to approve you before you can log in."
      redirect_to root_path
    else
      flash[:notice] = @user.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      flash[:notice] = "Update successful!"
      redirect_to root_path
    else
      flash[:notice] = @user.errors.full_messages.to_sentence
    end
  end

  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :current_password,
      :password,
      :password_confirmation
      )
  end
end
