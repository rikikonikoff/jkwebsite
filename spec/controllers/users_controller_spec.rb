require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let!(:jacob) { FactoryGirl.create(:admin, name: "Jacob Konikoff") }

  describe "#index" do
    it "returns http success" do
      sign_in(jacob)
      get :index
      expect(response).to have_http_status(:success)
    end
  end
end
