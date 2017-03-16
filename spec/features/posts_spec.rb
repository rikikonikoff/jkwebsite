require 'rails_helper'

RSpec.feature "posts" do
  let!(:jacob) { FactoryGirl.create(:admin, name: "Jacob Konikoff") }

  scenario "admin creates a new post" do
    login_as(jacob)
    visit "/posts/new"
    fill_in "Title", with: "My First Post"
    click_link "add photo fields"
    # upload file
    # click_button "Post"

    # expect(page).to have_content "Posted!"
    # expect(page).to have_content "Blog Posts"
    # expect(Post.count).to change_by(1)
    # expect(Post.last.photos).to include the file we chose
  end

  scenario "user cannot create a new post" do

  end

  scenario "unregistered/unapproved user cannot create a new post" do

  end

  scenario "user views posts" do

  end

  scenario "unregistered/unapproved user cannot view posts" do

  end
end
