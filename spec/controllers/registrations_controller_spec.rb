require 'rails_helper'

RSpec.describe RegistrationsController, type: :controller do
  before(:each) do
    @request.env["devise.mapping"] = Devise.mappings[:user]
  end

  describe "#new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  xdescribe "#create" do
    it "returns http redirect" do
      post :create, user: FactoryGirl.create(:user)

      expect(User.count).to change_by(1)
      expect(response).to have_http_status(:redirect)
    end
  end

  describe "#edit" do
    it "returns http redirect" do
      get :edit
      expect(response).to have_http_status(:redirect)
    end
  end

  describe "#update" do
    it "returns http redirect" do
      put :update
      expect(response).to have_http_status(:redirect)
    end

    xit "changes some attribute of a user" do
      admin = FactoryGirl.create(:user)
      put :update, id: user.id, user: { name:  "Boogeyman" }
      user.reload
      expect(user.name).to eq "Boogeyman"
    end

    
  end
end
