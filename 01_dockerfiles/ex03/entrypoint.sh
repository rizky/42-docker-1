/opt/gitlab/embedded/bin/runsvdir-start&
EXTERNAL_URL="http://gitlab.example.com" && gitlab-ctl reconfigure

tail -f /dev/null