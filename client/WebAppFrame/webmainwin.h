#ifndef WEBMAINWIN_H
#define WEBMAINWIN_H

#include <QMainWindow>

namespace Ui {
class WebMainWin;
}

class WebMainWin : public QMainWindow
{
    Q_OBJECT

public:
    explicit WebMainWin(QWidget *parent = nullptr);
    ~WebMainWin();

    void navigate(QString url);

private:
    Ui::WebMainWin *ui;
};

#endif // WEBMAINWIN_H
