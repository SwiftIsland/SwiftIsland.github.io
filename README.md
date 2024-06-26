# swift-island

Welcome to your new Jekyll theme! In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes`, your sass files in `_sass` and any other assets in `assets`.

To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

TODO: Delete this and the text above, and describe your gem


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "swift-island"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: swift-island
```
or
 
```yaml
remote_theme: swift-island
```
if you are running on Github pages.

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install swift-island

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

# Firebase
This website uses firebase as a backend.
This gets the json from Firebase and strips the first line using sed. This first line contains warnings we do not need. If we dont strip, jq gives an parse error since it is not valid json.

**Get data:**
```
firebase --project swiftisland-fc283 database:get /faq | sed '1d' | jq '.'   > ./api/faq.json
```

**Push data from JSON structure:**
```
firebase --project swiftisland-fc283 database:set /faq faq.json  
```

both endpoints here are `/faq`.

More commands can be found [here](https://firebase.blog/posts/2017/12/read-and-write-your-realtime-database) and [here](https://github.com/firebase/firebase-tools).

We might need to update the firebase package from Github to [this one](https://github.com/w9jds/firebase-action)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `swift-island.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

