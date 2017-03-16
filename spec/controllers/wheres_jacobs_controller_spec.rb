require 'rails_helper'

RSpec.describe WheresJacobsController, type: :controller do
  let!(:jacob) { FactoryGirl.create(:admin, name: "Jacob Konikoff") }

  describe "#index" do
    it "returns http success" do
      sign_in(jacob)
      get :index
      expect(response).to have_http_status(:success)
    end

    xcontext "admin is signed in" do
      #this will be a React test...
      it "shows a form to create a new WheresJacob" do
        w1 = WheresJacob.create(location: "Minneapolis")
        jacob = FactoryGirl.create(:admin, name: "Jacob Konikoff")
        sign_in(jacob)
        get :index

        expect(response.body).to have_content "Jacob, where are you?"
      end
    end
  end
end
