# Docker file for the jekyll static page
FROM ruby:3.4.8-alpine

RUN apk add --no-cache build-base nodejs yarn

WORKDIR /app

RUN gem install bundler

COPY . .

RUN bundle install

RUN bundle exec jekyll build

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
