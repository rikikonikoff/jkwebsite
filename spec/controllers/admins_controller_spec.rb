require 'rails_helper'

RSpec.describe AdminsController, type: :controller do
  before(:each) do
    @request.env["devise.mapping"] = Devise.mappings[:admin]
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

    xit "changes some attribute of an admin" do
      admin = FactoryGirl.create(:admin)
      put :update, id: admin.id, admin: { name:  "Boogeyman" }
      admin.reload
      expect(admin.name).to eq "Boogeyman"
    end
  end
end
