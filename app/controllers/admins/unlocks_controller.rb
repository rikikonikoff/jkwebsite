class Admins::UnlocksController < Devise::UnlocksController
  # GET /admin/unlock/new
  def new
    super
  end

  # POST /admin/unlock
  def create
    super
  end

  # GET /admin/unlock?unlock_token=abcdef
  def show
    super
  end

  protected

  # The path used after sending unlock password instructions
  def after_sending_unlock_instructions_path_for(admin)
    super(admin)
  end

  # The path used after unlocking the admin
  def after_unlock_path_for(admin)
    super(admin)
  end
end
