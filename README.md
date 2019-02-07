# tools-generate-sms-jobs

Generates job for sms from ids

# Setup

Create .env file with your local configs

```
KOR_SERVICE_URL=url-for-kor-service
KOR_JWT_SECRET=jwt-secret-for-kor-service
SMS_SERVICE_URL=url-for-sms-service
SMS_SERVICE_SENDER=sender
SMS_MESSAGE=message-to-send
DATA_DIRECTORY_PATH=test/directories/data
DONE_DIRECTORY_PATH=test/directories/done
JOBS_DIRECTORY_PATH=test/directories/jobs
QUEUE_DIRECTORY_PATH=test/directories/jobs
```



# Usage



# Related

- [robot-post-payload] (https://github.com/telemark/robot-post-payload) - robot for distributing messages
- [micro-kor](https://github.com/telemark/micro-kor) - microservice for kontakt- og reservasjonsregisteret
- [micro-sms](https://github.com/telemark/micro-sms) - microservice for sending sms

# License

[MIT](LICENSE)
