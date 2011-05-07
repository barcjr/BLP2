// BLP2 BARC Jr. Logging Program take 2
// Copyright (C) 2011  Hargobind S. Khalsa <khalsah@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

var express = require('express')
  , path    = require('path')
  , util    = require('util');

exports.run = function() {
  var server = express.createServer();

  var publicDir = path.resolve(__dirname, '../../public');

  util.log('Serving files from ' + publicDir);

  server.use(express.logger());
  server.use(express.static(publicDir));

  server.listen(3000);
}
