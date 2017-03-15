FactoryGirl.define do
  factory :publication do
    sequence(:title) { |n| "User #{n}" }
    sequence(:journal) { |n| "Journal #{n}" }
    sequence(:date) { |n| n.to_s }
    sequence(:authors) { |n| "#{n} author names" }
    issue "25"
    pages "1-7"
  end
end
