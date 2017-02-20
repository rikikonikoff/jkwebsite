class Admins::ConfirmationsController < Devise::ConfirmationsController
  # GET /admin/confirmation/new
  def new
    super
  end

  # POST /admin/confirmation
  def create
    super
  end

  # GET /admin/confirmation?confirmation_token=abcdef
  def show
    super
  end

  protected

  # The path used after resending confirmation instructions.
  def after_resending_confirmation_instructions_path_for(admin_name)
    super(admin_name)
  end

  # The path used after confirmation.
  def after_confirmation_path_for(admin_name, admin)
    super(admin_name, admin)
  end
end
