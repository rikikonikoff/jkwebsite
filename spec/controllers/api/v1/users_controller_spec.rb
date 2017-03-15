require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  before(:each) do
    jacob = FactoryGirl.create(:admin, name: "Jacob Konikoff")
  end

  describe "#index" do
    it "returns http success" do
      admin = FactoryGirl.create(:admin)
      sign_in(admin)
      get :index
      expect(response).to have_http_status(:success)
    end

    xcontext "admin is not logged in" do
      it "will redirect elsewhere" do
        get :index
        expect(response).to have_http_status(:redirect)
      end
    end
  end

  xdescribe "#update" do
    it "lets admin approve an unapproved user" do
      admin = FactoryGirl.create(:admin)
      user = FactoryGirl.create(:user)
      sign_in(admin)
      put :update, id: user.id, user: { approved: true }

      expect(user.approved).to be true
    end

    it "lets admin revoke approval" do
      admin = FactoryGirl.create(:admin)
      user = FactoryGirl.create(:user, approved: true)
      sign_in(admin)
      put :update, id: user.id, user: { approved: false }

      expect(user.approved).to be false
    end

  end
end
