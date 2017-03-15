require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe "#index" do
    it "returns http success" do
      admin = FactoryGirl.create(:admin)
      sign_in(admin)
      get :index
      expect(response).to have_http_status(:success)
    end

    context "admin is not logged in" do
      it "will redirect elsewhere" do
        get :index
        expect(response).to have_http_status(:redirect)
      end
    end
  end

  describe "#update" do
    it "lets admin approve an unapproved user" do

    end

    it "lets admin revoke approval" do

    end

  end
end
