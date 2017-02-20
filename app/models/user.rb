class User < ApplicationRecord
  devise :database_authenticatable,
    :registerable,
    :recoverable,
    :rememberable,
    :trackable,
    :validatable
  after_create :send_admin_mail

  validates :name, presence: true, uniqueness: { scope: :email }
  validates :email, presence: true, uniqueness: true
  validates_email_format_of :email
  validates :approved, inclusion: { in: [true, false] }
  validates :encrypted_password, presence: true, length: { minimum: 6 }

  def send_admin_mail
    AdminMailer.new_user_waiting_for_approval(self).deliver
  end

  def active_for_authentication?
    super && approved?
  end

  def inactive_message
    if !approved?
      :not_approved
    else
      super # Use whatever other message
    end
  end

  def self.send_reset_password_instructions(attributes = {} )
    recoverable = find_or_initialize_with_errors(reset_password_keys, attributes, :not_found)
    if !recoverable.approved?
      recoverable.errors[:base] << I18n.t("devise.failure.not_approved")
    elsif recoverable.persisted?
      recoverable.send_reset_password_instructions
    end
    recoverable
  end
end
