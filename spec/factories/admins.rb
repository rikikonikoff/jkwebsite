FactoryGirl.define do
  factory :admin do
    sequence(:name) { |n| "Admin #{n}" }
    sequence(:email) { |n| "adminemail#{n}@example.com" }
    password "password"
    password_confirmation "password"
  end
end
