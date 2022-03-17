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
33f3300f31828217ac32242576c5c46824d211f6456a8b0f7af667ce925382da