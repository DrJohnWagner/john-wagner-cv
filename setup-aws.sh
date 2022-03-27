# http://34.219.92.161/
ssh -i $HOME/.ssh/dr-john-wagner-aws.pem ec2-user@ec2-34-219-92-161.us-west-2.compute.amazonaws.com
sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo systemctl enable docker
sudo usermod -a -G docker ec2-user
exit
docker info
docker run -d --restart always -p 80:80 --name johnwagnercv drjohnwagner/john-wagner-cv
ba5dbfbb29298a378767bf9acce51fdb79c6b6316083cb6a6f3c3af8af7af799
d8e1cbe14ba8072109c92873febf23c6a03899656f3808f085006ef6e20320a8
59f2733394120f87e7b8424eeb73abe6224f1a2c5166e0d8e0f6259cb067d2a7
0e0eb5afa80edd359272c4ebf225b805267e32cce89c889a2fa84caf35a95156
d044997b7acfc9c78f93db09e82c075fa17633620dbc970c808bed5b77faefe2
f06f41e1da4c9d645659bdf50a35d0466c2ae1e510ccebfea0951d2d245dc10d
a20087397720b2eeca6fa497916549e051bedeaea937999ada961d68ee72e687
66f26fd530f473383bdbc562ee7669eb704c4fd3cae9f28cd610a45c4f68278d
c93052c87eccfc8115f4d65fba3d30c7aefd2007b962b3e32b0e1cae3e2beaf2

ssh -i $HOME/.ssh/dr-john-wagner-aws.pem ec2-user@ec2-34-219-92-161.us-west-2.compute.amazonaws.com
CONTAINER=c93052c87eccfc8115f4d65fba3d30c7aefd2007b962b3e32b0e1cae3e2beaf2
docker stop $CONTAINER
docker rm -f $CONTAINER
docker pull drjohnwagner/john-wagner-cv
docker run -d --restart always -p 80:80 --name johnwagnercv drjohnwagner/john-wagner-cv
