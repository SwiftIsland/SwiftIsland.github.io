# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "swift-island"
  spec.version       = "0.1.0"
  spec.authors       = ["Sidney de Koning"]
  spec.email         = ["info@swiftisland.nl"]

  spec.summary       = "The theme for the Swift Island conference"
  spec.homepage      = "http://www.swiftisland.nl"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "jekyll", "~> 3.7"
  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
