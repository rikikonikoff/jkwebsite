class Admins::PasswordsController < Devise::PasswordsController
  # GET /admin/password/new
  def new
    super
  end

  # POST /admin/password
  def create
    super
  end

  # GET /admin/password/edit?reset_password_token=abcdef
  def edit
    super
  end

  # PUT /admin/password
  def update
    super
  end

  protected

  def after_resetting_password_path_for(admin)
    super(admin)
  end

  # The path used after sending reset password instructions
  def after_sending_reset_password_instructions_path_for(admin_name)
    super(admin_name)
  end
end
