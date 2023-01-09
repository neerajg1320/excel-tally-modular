# Check gate-keeper status
sudo spctl --status

# Enable gate-keeper
sudo spctl --master-enable

# Disable gate-keeper
sudo spctl --master-disable

# Check the status of the app
sudo spctl --assess /Applications/TallyKit.app


