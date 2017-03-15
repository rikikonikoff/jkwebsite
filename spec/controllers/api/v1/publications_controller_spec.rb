require 'rails_helper'

RSpec.describe Api::V1::PublicationsController, type: :controller do
  let!(:p1) { FactoryGirl.create(:publication) }
  let!(:p2) { FactoryGirl.create(:publication) }

  describe "#index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "displays all publications in JSON format" do
      get :index
      expect(response.body).to have_content p1.to_json
      expect(response.body).to have_content p2.to_json
    end
  end
end
