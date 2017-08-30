defmodule Sling.Router do
  use Sling.Web, :router

  pipeline :api do
    # Plugs are like functions that each request will pipe through, similar to a Rails before_action.
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource
  end

  scope "/api", Sling do
    pipe_through :api

    post "/sessions", SessionController, :create
    delete "/sessions", SessionController, :delete
    post "/sessions/refresh", SessionController, :refresh
    resources "/users", UserController, only: [:create]
  end

  scope "/", Sling do
    get "/*path", ApplicationController, :not_found
  end
end
