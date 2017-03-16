require 'rails_helper'

RSpec.describe PhotosController, type: :controller do
  let!(:jacob) { FactoryGirl.create(:admin, name: "Jacob Konikoff") }

  describe "#index" do
    it "returns http success" do
      sign_in(jacob)
      get :index, post_id: 1
      expect(response).to have_http_status(:success)
    end
  end
end
