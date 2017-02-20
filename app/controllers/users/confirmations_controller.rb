class Users::ConfirmationsController < Devise::ConfirmationsController
  # GET /user/confirmation/new
  def new
    super
  end

  # POST /user/confirmation
  def create
    super
  end

  # GET /user/confirmation?confirmation_token=abcdef
  def show
    super
  end

  protected

  # The path used after resending confirmation instructions.
  def after_resending_confirmation_instructions_path_for(user_name)
    super(user_name)
  end

  # The path used after confirmation.
  def after_confirmation_path_for(user_name, user)
    super(user_name, user)
  end
end
