require 'rails_helper'

RSpec.describe Api::V1::WheresJacobsController, type: :controller do
  describe "#index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "shows the most recent WheresJacob" do
      w1 = WheresJacob.create(location: "Minneapolis")
      w2 = WheresJacob.create(location: "Los Angeles")
      get :index

      expect(response.body).to have_content w2.to_json
      expect(response.body).to_not have_content w1.to_json
    end
  end

  describe "#create" do
    it "returns http redirect" do
      post :create, wheres_jacob: { location: "Maryland" }
      expect(response).to have_http_status(:redirect)
    end
  end
end
