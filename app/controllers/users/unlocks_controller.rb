class Users::UnlocksController < Devise::UnlocksController
  # GET /user/unlock/new
  def new
    super
  end

  # POST /user/unlock
  def create
    super
  end

  # GET /user/unlock?unlock_token=abcdef
  def show
    super
  end

  protected

  # The path used after sending unlock password instructions
  def after_sending_unlock_instructions_path_for(user)
    super(user)
  end

  # The path used after unlocking the user
  def after_unlock_path_for(user)
    super(user)
  end
end
