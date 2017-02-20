FactoryGirl.define do
  factory :user do
    sequence(:name) { |n| "User #{n}" }
    sequence(:email) { |n| "useremail#{n}@example.com" }
    password "password"
  end
end
