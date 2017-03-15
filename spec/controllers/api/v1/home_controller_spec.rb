require 'rails_helper'

RSpec.describe Api::V1::HomeController, type: :controller do

  describe "#index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    context "nobody is signed in" do
      it "shows null" do
        get :index
        expect(response.body).to have_content "null"
      end
    end

    context "user is signed in" do
      it "shows user data" do
        jacob = FactoryGirl.create(:admin, name: "Jacob Konikoff")
        user = FactoryGirl.create(:user, approved: true)
        sign_in(user)
        get :index

        expect(response.body). to have_content "user"
        expect(response.body).to have_content(user.to_json)
      end
    end

    context "admin is signed in" do
      it "shows admin data" do
        jacob = FactoryGirl.create(:admin, name: "Jacob Konikoff")
        admin = FactoryGirl.create(:admin)
        sign_in(admin)
        get :index

        expect(response.body).to have_content "admin"
        expect(response.body).to have_content(admin.to_json)
      end
    end
  end
end
